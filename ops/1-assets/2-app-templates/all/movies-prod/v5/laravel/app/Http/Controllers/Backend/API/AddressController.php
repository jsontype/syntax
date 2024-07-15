<?php

namespace App\Http\Controllers\Backend\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\AddressResource;
use App\Models\Address;
use App\Models\User;
use Auth;
use Illuminate\Http\Request;

class AddressController extends Controller
{
    public function AddressList(Request $request)
    {
        $data['user_id'] = $request->input('user_id') ?? Auth::id();

        $user = User::where('id', $data['user_id'])->first();

        if (! $user) {
            $message = __('users.user_not_found');

            return response()->json(['message' => $message, 'status' => true], 200);
        }

        $user_address = $user->addresses;

        $addressCollection = AddressResource::collection($user_address);

        $message = __('users.address_list');

        return response()->json(['message' => $message, 'data' => $addressCollection, 'status' => true], 200);
    }

    public function store(Request $request)
    {
        $data = $request->all();

        $data['user_id'] = $request->input('user_id') ?? Auth::id();

        $user = User::where('id', $data['user_id'])->first();

        if (! $user) {
            $message = __('users.user_not_found');

            return response()->json(['message' => $message, 'status' => true], 200);
        }

        if ($request->has('is_primary') && $request->is_primary == 1) {
            $user->address()->update(['is_primary' => 0]);
        }

        $newAddress = new Address($data);

        if ($request->is_primary == 1) {
            $newAddress->is_primary = 1;
        }

        $user->address()->save($newAddress);

        $message = __('users.address_store');

        return response()->json(['message' => $message, 'status' => true], 200);
    }

     public function RemoveAddress(Request $request)
     {
         $address_id = $request->id;

         $address = Address::where('id', $address_id)->first();

         if (! $address) {
             $message = __('users.address_not_found');

             return response()->json(['message' => $message, 'status' => true], 200);
         }

         $address->delete();

         $message = __('users.address_deleted');

         return response()->json(['message' => $message, 'status' => true], 200);
     }

     public function EditAddress(Request $request)
     {
         $address_id = $request->id;

         $address = Address::find($address_id);

         if (! $address) {
             $message = __('users.address_not_found');

             return response()->json(['message' => $message, 'status' => true], 404);
         }

         $user_id = $request->input('user_id') ?? Auth::id();

         $user = User::where('id', $user_id)->first();

         if ($request->has('is_primary') && $request->is_primary == 1) {
             $user->addresses()->where('id', '!=', $address_id)->update(['is_primary' => 0]);
         }

         $address->update([
             'first_name' => $request->input('first_name'),
             'last_name' => $request->input('last_name'),
             'address_line_1' => $request->input('address_line_1'),
             'address_line_2' => $request->input('address_line_2'),
             'postal_code' => $request->input('postal_code'),
             'city' => $request->input('city'),
             'state' => $request->input('state'),
             'country' => $request->input('country'),
             'is_primary' => $request->is_primary,
         ]);

         $message = __('users.address_updated');

         return response()->json(['message' => $message, 'status' => true], 200);
     }
}
