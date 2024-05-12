﻿using ArchDdd.Adapters.Presentation.Abstractions.Controllers;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Reflection;
using ArchDdd.Application.UseCases.Users.Commands.RegisterUser;
using MediatR;
using ArchDdd.Domain.Abstractions.Results.Contracts;

namespace ArchDdd.Adapters.Presentation.Controllers;

public class UserController(ISender sender) : ApiController(sender)
{
    [HttpPost("[action]")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType<ProblemDetails>(StatusCodes.Status400BadRequest)]
    public async Task<Results<Ok<RegisterUserResponse>, ProblemHttpResult>> Register(
        [FromBody] RegisterUserCommand command,
        CancellationToken cancellationToken)
    {
        IResult<RegisterUserResponse> result = await Sender.Send(command, cancellationToken);

        if (result.IsFailure)
        {
            return HandleFailure(result);
        }

        return TypedResults.Ok(result.Value);
    }
}