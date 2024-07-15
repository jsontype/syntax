<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PermissionRequest extends FormRequest
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
     * @return array<string, mixed>
     */
    public function rules()
    {
        $method = strtolower($this->method());
        $permission_id = $this->route()->permission;

        $rules = [];
        switch ($method) {
            case 'post':
                $rules = [
                    'name' => 'required|max:20|unique:permissions,name',
                    'title' => 'required|max:20|unique:permissions,title',
                ];
                break;
            case 'patch':
            case 'put':
                $rules = [
                    'name' => 'required|max:20|unique:permissions,name',
                    'title' => 'required|max:20|unique:permissions,title,'.$permission_id,
                ];
                break;
        }

        return $rules;
    }
}
