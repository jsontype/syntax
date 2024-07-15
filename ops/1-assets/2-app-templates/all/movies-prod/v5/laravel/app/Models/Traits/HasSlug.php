<?php

namespace App\Models\Traits;

trait HasSlug
{
    /**
     *  Set 'Name' attribute value.
     */
    public function setNameAttribute($value)
    {
        $this->attributes['name'] = trim($value);
        $this->attributes['slug'] = \Str::slug($value);
    }
}
