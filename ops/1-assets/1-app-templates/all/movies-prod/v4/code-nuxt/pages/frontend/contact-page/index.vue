<template>
  <div>
    <breadcrumb name="Contact" />
    <main id="main" class="site-main">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-sm-12">
            <ContactList />
            <ContactFrom />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import breadcrumb from '../../../components/frontend/breadcrumb/breadcrumb.vue'
import ContactFrom from '../../../components/frontend/contact-page/ContactFrom'
import ContactList from '../../../components/frontend/contact-page/contactList'
export default {
  name: 'Contact',
  layout: 'FrontendLayout',
  components: {
    ContactFrom,
    ContactList,
    breadcrumb
  }
}
</script>
