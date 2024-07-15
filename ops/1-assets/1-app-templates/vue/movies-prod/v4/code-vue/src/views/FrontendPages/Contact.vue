<template>
     <main id="main" class="site-main">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-sm-12">
                        <ContactList/>
                        <ContactFrom/>
                    </div>
                </div>
            </div>
     </main>
</template>
<script>
import ContactFrom from './Contact/ContactFrom'
import ContactList from './Contact/contactList'
export default {
  name: 'Contact',
  components: {
    ContactFrom,
    ContactList
  }
}
</script>
