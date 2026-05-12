using Ecommerce.Infrastructure.Context;
using Microsoft.OpenApi.Models;
using Prometheus;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddCors(options =>
	{
	options.AddPolicy("AllowAll", policy =>
		{
		policy.AllowAnyOrigin()	// Only for development, in production specify the allowed origins, methods and headers explicitly
		.AllowAnyMethod()	// only
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
app.Use(async(context, next) => {
    Console.WriteLine(context.Connection.RemoteIpAddress?.ToString());
    await next();
    });

app.UseHttpMetrics();

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
app.MapMetrics();
app.Run();
