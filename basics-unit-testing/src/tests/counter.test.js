import { fireEvent, render, screen } from "@testing-library/react"
import Counter from "../components/Counter"





test("increments count when button is clicked", ()=>{

     render(<Counter />);

     // Get a button by its role
     // let btnElement = screen.getByText(/click/i);
     let btnElement = screen.getByRole('button', {  name: /click/i})
     fireEvent.click(btnElement);
     let txtElement = screen.getByText(/Count: 2/i)  
     expect(txtElement).toBeInTheDocument()


     let input = screen.getByRole("textbox");

     fireEvent.change(input,{target:{value:"%"}})
     expect(input.value).toBe("%")
})