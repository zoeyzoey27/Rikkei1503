type GreetProps = {
    name: string
}
export const Greet = (props: GreetProps) => {
    return (
         <div>
             <h2>Wellcome {props.name}! React App with TypeScript</h2>
         </div>
    );
}