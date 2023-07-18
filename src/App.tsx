import RangeCalendar from './components/calender'


function App() {
  return (
    <>
    {/* <Button onPress={() => alert('Button pressed!')}>Test</Button>
    <button role="button" tabIndex={0} onClick={() => alert('Button pressed!')}>Test2</button>
    <div onClick={() => alert('Button pressed!')}>Test2 div</div>
    <div role="button" tabIndex={0} onClick={() => alert('Button pressed!')}>Test2 div with role</div>
    <Button onPress={() => alert('Button pressed!')}>Test3</Button>
    <Button onPress={() => alert('Button pressed!')}>Test4</Button> */}
    <div style={{padding:"20px"}}>


<RangeCalendar aria-label="Trip dates"  />

    <RangeCalendar aria-label="Trip dates" 
      btnBackground="yellow"
      btnStyles={{padding:"10px"}}
      headreStyle={{color:"blue"}}
      weekColor="purple"
      weekStyles={{padding:"8px"}}
      cellBackground="rgba(0,0,255,0.5)"
      cellBackgroundSelected="pink"
      cellStyles={{padding:"8px"}}
      />
      </div>
    </>
  );
}

export default App;
