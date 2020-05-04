# typescript-playground
```
import { NumberValidator, Employee, EmployeeValidator } from 'test-validation';
```


```
        const validator: NumberValidator = new NumberValidator();
        return 'Is Valid:' + String(validator.validateNumberUnderHundred(input));
```


To Consume in C#
```
using Microsoft.AspNetCore.NodeServices;
```
```
using Microsoft.AspNetCore.NodeServices;
using NodeServiceAPI.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace NodeServiceAPI.NodeServices
{
    public class ValidationService : IValidationService
    {
        public readonly INodeServices _nodeServices;
        //public readonly string _scriptFolder;
        //  string scriptFolder
        public ValidationService(INodeServices nodeServices)
        {
            _nodeServices = nodeServices;
            //_scriptFolder = scriptFolder;
        }

        public async Task<string> ValidateNumberNPM(int number)
        {
            //string path = Path.Combine("NodeServices", "./scripts/numbervalidation");
            var result = await _nodeServices.InvokeExportAsync<string>("/home/site/wwwroot/NodeServices/scripts/numbervalidation", "numbervalidation", number);
            return result;
        }
    }
}
```

numbervalidation.ts
```
import { NumberValidator } from "test-validation";

export const numbervalidation = function (callback: any, number: number): string {
    const validator = new NumberValidator();
    return callback(null, 'Is Valid:' + String(validator.validateNumberUnderHundred(number)));
}
```