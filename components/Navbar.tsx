export function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">D12N.EU</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link" href="/">Startseite</a>
            <a class="nav-link" href="/pol-bildung/">Politische Bildung</a>
            <a class="nav-link" href="/">Politische Theorie</a>
            <a class="nav-link" href="/">Kommunikationstheorie</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

