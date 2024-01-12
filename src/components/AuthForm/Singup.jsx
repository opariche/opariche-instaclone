import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Alert, AlertIcon, Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";
import useSingUpWithEmailAndPassword from "../../hooks/useSingUpWithEmailAndPassword.js";

const Singup = () => {
    const [inputs, setinputs] = useState({
        fullName:'',
        username: '',
        email:'',
        password:'',
        });
const [showPassword, setShowPassword] = useState(false);
const {loading, error, singup}= useSingUpWithEmailAndPassword()


  return (
    <>
    <Input placeholder="Email" fontSize={14} type="email" size={"sm"}
value={inputs.email}
onChange={(e) => setinputs({...inputs,email:e.target.value})}
/>
<Input placeholder="Username" fontSize={14} type="text" size={"sm"}
value={inputs.username}
onChange={(e) => setinputs({...inputs,username:e.target.value})}
/>

<Input placeholder="Full Name" fontSize={14} type="text" size={"sm"}
value={inputs.fullName}
onChange={(e) => setinputs({...inputs,fullName:e.target.value})}
/>
<InputGroup>

<Input 
placeholder="Password"
fontSize={14}
type={showPassword ? "text" : "password"}
value={inputs.password}
size={"sm"}
onChange={(e) => setinputs({ ...inputs, password: e.target.value})}
/>
<InputRightElement h={"full"}>
    <Button variant={"gost"} size={"sm"} onClick={() => setShowPassword(!showPassword)}>
    {showPassword ? <ViewIcon /> : <ViewOffIcon/>}

    </Button>


</InputRightElement>



</InputGroup>

{error && (
				<Alert status='error' fontSize={13} p={2} borderRadius={4}>
					<AlertIcon fontSize={12} />
					{error.message}
				</Alert>
			)}

<Button w={"full"} colorScheme="blue" size={"sm"} fontSize={14}

isLoading={loading}
onClick={()=> singup(inputs)}>
            Sing Up
        </Button>


    </>
  )
}

export default Singup