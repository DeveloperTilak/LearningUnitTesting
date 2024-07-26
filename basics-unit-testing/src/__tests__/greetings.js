import { render, screen } from "@testing-library/react"
import Greetings from "../components/Greetings"



test("test greeting component", ()=>{

     render(
          <Greetings name={"Tilak"}/>
     )

     let element = screen.getByText(/Hello, Tilak!/i);

     expect(element).toBeInTheDocument();
})