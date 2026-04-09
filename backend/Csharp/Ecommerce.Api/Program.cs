using Ecommerce.Infrastructure.Context;
using Microsoft.OpenApi.Models;

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
