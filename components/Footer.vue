<template>
  <div class="footer">
    <img
      src="/images/logo.png"
      alt="logo"
      class="img img-rounded"
      width="80"
      height="80"
    />
    <h3 class="title">This is the footer of the page</h3>
    <div class="container">
      <p class="description">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged
      </p>
    </div>

    <div class="info">
      <p>
        <b>Email:</b>
      </p>
      <p>mahmoodnazari1995@gmail.com</p>

      <p>
        <b>Phone:</b>
      </p>
      <p>+(93) 794 984 830</p>

      <p>
        <b>Github:</b>
      </p>
      <p>
        <a href="https://github.com/Mahmood1399" target="_blank">
          <code>https://github.com/Mahmood1399</code>
        </a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style>
.footer {
  margin: 0 auto;
  height: 20%;
  background-color: #343a40;
  margin-top: 25%;
  width: 100%;
  color: white;
  padding-top: 5%;
  padding-bottom: 10%;
  text-align: center;
}

.img {
  margin-bottom: 20px;
}

.info {
  align-items: center;
}
</style>
