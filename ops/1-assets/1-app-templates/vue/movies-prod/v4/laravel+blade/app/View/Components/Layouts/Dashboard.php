<?php

namespace App\View\Components\Layouts;

use Illuminate\View\Component;

class Dashboard extends Component
{
    /**
     * Create a new component instance.
     *
     * @return void
     *
     */

    public $assets , $modalJs;

    public function __construct($assets = [], $modalJs = false) 
    {
        $this->assets = $assets;
        $this->modalJs = $modalJs;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|string
     */
    public function render()
    {
        return view('layouts.dashboard');
    }
}
