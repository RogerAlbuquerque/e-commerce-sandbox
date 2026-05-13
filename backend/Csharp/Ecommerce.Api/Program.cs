using Ecommerce.Infrastructure.Context;
using Microsoft.OpenApi.Models;
using OpenTelemetry.Logs;
using OpenTelemetry.Metrics;
using OpenTelemetry.Resources;
using OpenTelemetry.Trace;

var builder = WebApplication.CreateBuilder(args);

const string serviceName = "Ecommerce-api";
const string serviceVersion = "1.0.0";

var resourceBuilder = ResourceBuilder.CreateDefault()
    .AddService(
        serviceName: serviceName,
        serviceVersion: serviceVersion);


builder.Services.AddOpenTelemetry()
    .ConfigureResource(r => r.AddService(
        serviceName,
        serviceVersion: serviceVersion))
     .WithTracing(tracing =>
    {
        tracing
            .AddAspNetCoreInstrumentation(options =>
            {
                options.RecordException = true;
                options.Filter = context =>
                {
                    return !context.Request.Path.StartsWithSegments("/health");
                };
            })

            .AddHttpClientInstrumentation(options =>
            {
                options.RecordException = true;
            })

            .AddOtlpExporter(options =>
            {
                options.Endpoint =
                    new Uri("http://localhost:4317");
            });
    })

    .WithMetrics(metrics =>
    {
        metrics
            .AddAspNetCoreInstrumentation()
            .AddHttpClientInstrumentation()

            .AddOtlpExporter(options =>
            {
                options.Endpoint =
                    new Uri("http://localhost:4317");
            });
    });

builder.Logging.ClearProviders();
builder.Logging.AddConsole();
builder.Logging.AddOpenTelemetry(logging =>
{
    logging.IncludeScopes = true;
    logging.IncludeFormattedMessage = true;
    logging.ParseStateValues = true;

    logging.SetResourceBuilder(resourceBuilder);

    logging.AddOtlpExporter(options =>
    {
        options.Endpoint =
            new Uri("http://localhost:4317");
    });
});


builder.Services.AddControllers();
builder.Services.AddCors(options =>
    {
        options.AddPolicy("AllowAll", policy =>
            {
                policy.AllowAnyOrigin() // Only for development, in production specify the allowed origins, methods and headers explicitly
            .AllowAnyMethod()   // only
            .AllowAnyHeader();
            });
    });

builder.Services.AddInfrastructureAPI(builder.Configuration);
builder.Services.AddSwaggerGen(options =>
{
    options.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "Ecommerce API",
        Version = "v1"
    });
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(options =>
    {
        options.SwaggerEndpoint("/swagger/v1/swagger.json", "Ecommerce API v1");
    });
}

app.UseCors("AllowAll");
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.Run();
