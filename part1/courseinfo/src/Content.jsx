import Part from "./Part";

const Content = (props) => {
  return (
    <>
    <Part title={props.parts[0].name} exerciseNumber={props.parts[0].exercises}/>
    <Part title={props.parts[1].name} exerciseNumber={props.parts[1].exercises}/>
    <Part title={props.parts[2].name} exerciseNumber={props.parts[2].exercises}/>
    </>
  );
};

export default Content;
