import './App.css'

function App() {
  return (
    <div className="App h-screen w-screen text-white flex justify-between flex-col">
      <div className="Cover md:p-32 p-10">
        <h1 className="text-5xl font-bold">Jakub Rekowski</h1>
        <p className="text-2xl mt-4">Hi! I'm a Full Stack developer from Wroclaw, Poland. I specialize in Go, Node.js, and Python.</p>
        <p className="text-2xl mt-4">You can check some of my work on
          <a href="https://github.com/jakubrekowski" rel="noreferrer" target="_blank" className="font-bold"> GitHub </a>.
        </p>
      </div>
      <div className="Footer pb-10 px-10 md:pb-32 md:px-32 text-2xl mt-auto">
        <p>Write to me at <a href="mailto:jakub.rekowski@unoff.pl" className="font-semibold">jakub.rekowski@unoff.pl</a></p>
      </div>
    </div>
  );
}

export default App;
