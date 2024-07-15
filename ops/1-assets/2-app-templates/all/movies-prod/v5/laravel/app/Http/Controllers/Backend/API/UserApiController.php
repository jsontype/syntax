<?php

namespace App\Http\Controllers\Backend\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;

class UserApiController extends Controller
{
    public function index()
    {
        return $this->sendResponse(UserResource::collection(User::get()), __('messages.user_list'));
    }

    public function store(UserRequest $request)
    {
        $user = User::create($request->all());

        return $this->sendResponse(new UserResource($user), __('messages.user_create'));
    }

    public function show(User $user)
    {
        return $this->sendResponse(new userResource($user), __('messages.user_detail'));
    }

    public function update(UserRequest $request, User $user)
    {
        $user->update($request->all());

        return $this->sendResponse(new UserResource($user), __('messages.user_update'));
    }

    public function destroy(User $user)
    {
        $id = $user->id;
        $user->delete();

        return $this->sendResponse($id, __('messages.user_delete'));
    }
}
