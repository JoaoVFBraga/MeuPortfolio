import './Header.css'

export default function Header() {
  return (
    <div className='header-container'>
      <div className='header'>
        <h1>João Braga</h1>
        <div className='configuracoes'>
          <div>
            <input type="checkbox" id='chk-darkmode' />
            <label htmlFor="chk-darkmode" className='botao-switch'>
              <span className='slider slider-darkmode'></span>
            </label>
          </div>
          <div>
            <input type="checkbox" id='chk-idioma' />
            <label htmlFor="chk-idioma" className='botao-switch'>
              <span className='slider slider-idioma'></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}