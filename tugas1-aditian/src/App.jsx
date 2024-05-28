
function App() {
  const biodata = {
    id: 1,
    name: "Aditia Nurohman",
    born: "3 Juli 2002",
    age: "21 Tahun",
    address: "Jl. Dakota No. 8A Sukaraja, Bandung",
    tlp: "0888 0955 2158",
    hobbies: ["Sleep", "Game", "Singing"],
    images: "./pas-foto.jpg",
  };

  return (
    <div className="wrapper">
      <h1>BIODATA DIRI</h1>
      <hr />
      <table className="table">
        <tbody>
          <tr>
            <td>Nama</td>
            <td>: {biodata.name}</td>
            <td rowSpan="5">
              <img src={biodata.images} alt="Pas foto" className="photo" />
            </td>
          </tr>
          <tr>
            <td>Tanggal Lahir</td>
            <td>: {biodata.born}</td>
          </tr>
          <tr>
            <td>Umur</td>
            <td>: {biodata.age}</td>
          </tr>
          <tr>
            <td>Alamat</td>
            <td>: {biodata.address}</td>
          </tr>
          <tr>
            <td>Telepon</td>
            <td>: {biodata.tlp}</td>
          </tr>
        </tbody>
      </table>  
      <ul className="apa">
        {biodata.hobbies.map((hobby) => (
          <li key={hobby} className="hoby">
            {hobby}
          </li>
        ))}
      </ul>  
    </div>
  );
}

export default App;
