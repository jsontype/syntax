@extends('layouts.app')

@section('content')
<div class="row">
<div class="col-lg-12">
    <div id="accordionExample" class="accordion custom-accordion iq-accordion-card">
    <div class="accordion-item">
        <h2 id="headingOne" class="accordion-header">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Lorem ipsum dolor sit</button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div class="accordion-body"><strong>Anim pariatur cliche reprehenderit,</strong> enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.</div>
        </div>
    </div>
    <div class="accordion-item">
        <h2 id="headingTwo" class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">consectetur adipiscing elit</button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div class="accordion-body"><strong>Anim pariatur cliche reprehenderit,</strong> enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, <code>non cupidatat skateboard dolor brunch.</code> Food truck quinoa nesciunt laborum eiusmod</div>
        </div>
    </div>
    <div class="accordion-item">
        <h2 id="headingThree" class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Etiam sit amet justo non</button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div class="accordion-body"><strong>Anim pariatur cliche reprehenderit,</strong> enim eiusmod high life accusamus terry richardson ad squid. <code> 3 wolf moon officia aute,</code> non cupidatat skateboard dolor brunch.</div>
        </div>
    </div>
    <div class="accordion-item">
        <h2 id="headingFour" class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">velit accumsan laoreet</button>
        </h2>
        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
        <div class="accordion-body"><strong>Anim pariatur cliche reprehenderit,</strong> enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,<code> non cupidatat skateboard dolor brunch.</code> Food truck quinoa nesciunt laborum eiusmod.</div>
        </div>
    </div>
    <div class="accordion-item">
        <h2 id="headingFive" class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">Donec volutpat metus in erat</button>
        </h2>
        <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
        <div class="accordion-body"><strong>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</strong> 3 wolf moon officia aute,<code> non cupidatat skateboard dolor brunch.</code> Food truck quinoa nesciunt laborum eiusmod.</div>
        </div>
    </div>
    </div>
</div>
</div>
@endsection