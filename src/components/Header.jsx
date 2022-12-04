import '../css/Common.css'
function Header() {
  const toHome = () => {
    window.location.href = `/`
  }
  return (
  <header className='main-header'>
    <h1 onClick={toHome}>LH 분양공고</h1>
  </header>
  )
}
export default Header;