<template>
    <div class="navbar navbar-expand-lg bg--white navbar-light">
        <a class="navbar-brand" href="#"><img src="@/assets/img/logo.svg"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
             <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="nav navbar-nav ml-auto">
                <li class="nav-item active">
                   <router-link class="nav-link" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/restaurant">List Rrestaurant</router-link>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#tentang">Tentang</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#layanan">Layanan</a>
                </li>
                <li class="nav-item">
                    <button class="btn btn--lg btn--black">Mulai Dari Sini</button>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
  name: 'navbar'
}
</script>
