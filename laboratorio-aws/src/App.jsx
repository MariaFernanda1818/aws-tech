import './App.css'

function App() {
  return (
    <main className="container">
      <section className="card">
        <div className="badge">AWS Amplify</div>

        <h1>Laboratorio DevOps - AWS U Caldas</h1>

        <h2>Desplegado con AWS Amplify</h2>

        <p className="description">
          Aplicación desarrollada con React y Vite para el laboratorio de
          DevOps, utilizando AWS Amplify como servicio de despliegue.
        </p>

        <div className="info">
          <div className="info-item">
            <span>Grupo</span>
            <strong>Grupo 1</strong>
          </div>

          <div className="info-item">
            <span>Estudiante 1</span>
            <strong>Sofia Salgado</strong>
          </div>

          <div className="info-item">
            <span>Estudiante 2</span>
            <strong>Maria Fernanda</strong>
          </div>

          <div className="info-item">
            <span>Curso</span>
            <strong>Laboratorio DevOps</strong>
          </div>
        </div>

        <div className="technologies">
          <span>React</span>
          <span>Vite</span>
          <span>AWS</span>
          <span>Amplify</span>
        </div>

        <p className="footer">
          Proyecto académico - Laboratorio DevOps
        </p>
      </section>
    </main>
  )
}

export default App