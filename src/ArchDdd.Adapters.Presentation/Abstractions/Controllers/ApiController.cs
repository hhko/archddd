﻿using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace ArchDdd.Adapters.Presentation.Abstractions.Controllers;

[ApiController]
[Route("api/[controller]")]
//[Produces("application/json")]
public abstract class ApiController(ISender sender) : ControllerBase
{
    protected readonly ISender Sender = sender;
}