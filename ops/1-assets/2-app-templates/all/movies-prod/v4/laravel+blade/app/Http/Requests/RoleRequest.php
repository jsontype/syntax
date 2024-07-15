<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RoleRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $method = strtolower($this->method());
        $role_id = $this->route()->role;

        $rules = [];
        switch ($method) {
            case 'post':
                $rules = [
                    'title' => 'required|max:20',
                ];
                break;
            case 'patch':
            case 'put':
                $rules = [
                    'title' => 'required|max:20',
                ];
                break;
        }

        return $rules;
    }
}
