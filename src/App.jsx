function App() {
  return (
    <>
      <div className="card lg:card-side bg-base-100 p-10 h-screen drop-shadow-[0 0 2em #646cffaa]">
        <figure>
          <img src="/freya.jpg" alt="Album" />
        </figure>
        <div className="card-body">
          <h1 className="card-title text-purple-600">LOGIN</h1>
          <hr className="mb-10" />
          <div>
            <label>Email</label> <br />
            <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs mb-10" />
            <br />
            <label>Password</label> <br />
            <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs mb-10" />
          </div>
          <div className="card-actions justify-end">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
