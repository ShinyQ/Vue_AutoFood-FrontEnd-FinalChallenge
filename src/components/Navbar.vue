<template>
	<nav class="navbar fixed-top navbar-expand-lg navbar-light bg-putih">
		<div class="container container-nav">
			<router-link :to="'/#home'" class="navbar-brand">
				<img src="@/assets/img/Logo.png" class="d-inline-block align-top" alt="">
			</router-link>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNavDropdown">
				<ul class="navbar-nav ml-auto">
					<li class="nav-item active">
						<router-link :to="'/#home'" class="nav-link">Home <span class="sr-only">(current)</span></router-link>
					</li>
					<li class="nav-item">
						<a href="/#about" class="nav-link">Tentang</a>
					</li>
					<li class="nav-item">
						<a href="/#layanan" class="nav-link">Layanan</a>
					</li>
					<li class="nav-item">
						<router-link :to="'/restaurant'" class="btn btn-lg btn-main">Mulai di sini</router-link>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
	export default {
		name: 'navbar'
	}
</script>
