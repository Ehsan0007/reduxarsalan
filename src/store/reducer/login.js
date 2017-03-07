export function Login (state={},action)
{
    switch(action.type)
    {
        case "LoginSuccess":
        {
            return action.result;
        }
        case "loginFail":
        {
            return state;
        }
        default:{
            return state
        }
    }
}