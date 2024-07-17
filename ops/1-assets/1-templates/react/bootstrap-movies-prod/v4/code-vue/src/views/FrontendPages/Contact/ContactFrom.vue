<template>
    <div>
        <div class="text-center iq-title-box iq-box iq-title-default">
            <h2 class="iq-title">
                Say Hello..!
            </h2>
            <p class="iq-title-desc">Fill up this form to reach our stunning Streamit team and click on send message. </p>
        </div>
        <div class="wrapper">
      <form action="" method="post" class="wpcf7-form init" novalidate="novalidate" data-status="init">
        <div style="display: none;">
            <input type="hidden" name="_wpcf7" value="6">
            <input type="hidden" name="_wpcf7_version" value="5.3.2">
            <input type="hidden" name="_wpcf7_locale" value="en_US">
            <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f6-p5048-o1">
            <input type="hidden" name="_wpcf7_container_post" value="5048">
            <input type="hidden" name="_wpcf7_posted_data_hash" value="">
        </div>
        <div class="contact-form contact-style">
            <div class="row">
                <div class="col-md-6">
                    <div class="cfield">
                        <span class="wpcf7-form-control-wrap your-name">
                            <input type="text" name="your-name" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Your Name">
                        </span>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="cfield">
                        <span class="wpcf7-form-control-wrap your-subject">
                            <input type="text" name="your-subject" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Last Name">
                        </span>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="cfield">
                        <span class="wpcf7-form-control-wrap tel-478">
                            <input type="tel" name="tel-478" value="" size="40" maxlength="140" minlength="10" class="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel" aria-required="true" aria-invalid="false" placeholder="Phone Number">
                        </span>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="cfield">
                        <span class="wpcf7-form-control-wrap your-email">
                            <input type="email" name="your-email" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-required="true" aria-invalid="false" placeholder="Your Email">
                        </span>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="cfield">
                        <span class="wpcf7-form-control-wrap your-message">
                            <textarea name="your-message" cols="40" rows="10" class="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Your Message"></textarea>
                        </span>
                    </div>
                </div>
                <div class="col-md-12">
                    <button id="submit" name="submit" type="submit" value="Send" class="btn btn-hover iq-button">
                        <span class="iq-btn-text-holder">Send Message</span>
                        <br>
                    </button>
                </div>
                </div>
                </div>
                <div class="wpcf7-response-output" aria-hidden="true"></div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
  name: 'ContactFrom'
}
</script>
