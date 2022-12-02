function Header() {
  const toHome = () => {
    window.location.href = `/`
  }
  return (
  <header className='main-header'>
    <h1 onClick={toHome}>자유게시판</h1>
  </header>
  )
}
export default Header;