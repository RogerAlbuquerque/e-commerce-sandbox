using Ecommerce.Infrastructure.Context;
using Scalar.AspNetCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

builder.Services.AddInfrastructureAPI(builder.Configuration);
builder.Services.AddOpenApi();

var app = builder.Build();


if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.MapScalarApiReference();
}
var configuration = builder.Configuration;
string connectionstr = configuration.GetConnectionString("Mysql")!
            .Replace("${DB_HOST}", Environment.GetEnvironmentVariable("DB_HOST"))
            .Replace("${DB_PORT}", Environment.GetEnvironmentVariable("DB_PORT"))
            .Replace("${DB_NAME}", Environment.GetEnvironmentVariable("DB_NAME"))
            .Replace("${DB_USER}", Environment.GetEnvironmentVariable("DB_USER"))
            .Replace("${DB_PASSWORD}", Environment.GetEnvironmentVariable("DB_PASSWORD")) ?? throw new Exception("The connection string for MySQL was not found.");


app.UseCors("AllowAll");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
