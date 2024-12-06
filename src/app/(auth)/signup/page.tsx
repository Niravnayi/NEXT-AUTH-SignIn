
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Signup = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-screen">
        <Card className="w-96">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Sign Up</CardTitle>
          </CardHeader>

          <CardContent>
            <form className="flex flex-col gap-4">
              <div className="flex flex-col gap-4">
              <Input placeholder="Name" />
                <Input placeholder="Email" type="email" />
                <Input placeholder="Password" type="password" />
              </div>
              <div>
                <Button type="submit" className="w-full">
                  Sign Up
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col gap-3">
            <span>Or</span>

            
              <Button type="submit" variant={"outline"}>
                Login With Google
              </Button>
           

            <Link href="/login">Already have an account? Login</Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Signup;
