﻿using ArchDdd.Application.Abstractions.Pipelines;

namespace Microsoft.Extensions.DependencyInjection;

internal static class MediatorRegistration
{
    internal static IServiceCollection RegisterMediator(this IServiceCollection services)
    {
        services.AddMediatR(configuration =>
        {
            configuration.RegisterServicesFromAssembly(ArchDdd.Application.AssemblyReference.Assembly);

            // Behavior 순서는 중요하다.
            configuration.AddOpenBehavior(typeof(LoggingPipeline<,>));
            configuration.AddOpenBehavior(typeof(ValidatorPipeline<,>));
        });

        return services;
    }
}