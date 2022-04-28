using System.ComponentModel.DataAnnotations;

namespace Models;

public class User
{
    public int ID { get; set; }
    // private string lastname = "";
    // public string LastName
    // {
    //     get => lastname;
    //     set
    //     {
    //         if (String.IsNullOrWhiteSpace(value))
    //         {
    //             throw new ValidationException("Last name cannot be empty!!!");
    //         }
    //         lastname = value;
    //     }
    // }
    // private string firstname = "";
    // public string FirstName
    // {
    //     get => firstname;
    //     set
    //     {
    //         if (String.IsNullOrWhiteSpace(value))
    //         {
    //             throw new ValidationException("First name cannot be empty!!!");
    //         }
    //         firstname = value;
    //     }
    // }

    private string password = "";
    public string Password 
    {
        get => password;
        set
        {
            if (String.IsNullOrWhiteSpace(value))
            {
                throw new ValidationException("Password cannot be empty!!!1");
            }
            password = value;
        }
    }
    
    private string username = "";
    public string UserName
    {
        get => username;
        set
        {
            if (String.IsNullOrWhiteSpace(value))
            {
                throw new ValidationException("Username cannot be empty!!!");
            }
            username = value;
        }
    }

    // //status is 0 when the user is disconned or 1 when the user is connected
    // public int Status { get;  set; }

    //public bool IsAdmin { get;  set; }

}
