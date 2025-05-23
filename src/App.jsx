import { useState } from 'react'
import zomis from '/public/zomis.jpg'
import './App.css'

export default function App() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Obrigado pelo contato, ${formData.nome}! Sua mensagem foi recebida.`)
    setFormData({ nome: '', email: '', mensagem: '' })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="app">
      <header>
        <img src={zomis} alt="Logo" className='logo'/>
        <h1>Bem-vindo a LogicTech</h1>
        <nav>
          <ul>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
      </header>
      <div className="main-content">
        <main className='maimg'>
          <section id="inicio">
            <h2>Início</h2>
            <p>Somos uma Startup focada em desenvolvimento de sites .</p>
          </section>

          <section id="sobre">
            <h2>Sobre</h2>
            <p>Esta página foi criada como u exemplo.</p>
          </section>

          <section id="contato">
            <h2>Contato</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nome">Nome:</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="mensagem">Mensagem:</label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit">Enviar</button>
            </form>
          </section>
        </main>

        <footer>
          <p>&copy; 2024 Minha Página Web. Todos os direitos reservados.</p>
        </footer>
      </div>
    </div>
  )
}