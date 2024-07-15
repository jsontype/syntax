<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class SettingController extends Controller
{
    public function __construct()
    {
        // Page Title
        $this->module_title = 'settings.title';

        // module name
        $this->module_name = 'settings';

        // module icon
        $this->module_icon = 'fas fa-cogs';

        $this->global_booking = false;

        view()->share([
            'module_title' => $this->module_title,
            'module_name' => $this->module_name,
            'module_icon' => $this->module_icon,
            'global_booking' => $this->global_booking,
        ]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $module_action = 'List';

        return view('backend.settings.index', compact('module_action'));
    }

    public function index_data(Request $request)
    {
        if (! isset($request->fields)) {
            return response()->json($data, 404);
        }

        $fields = explode(',', $request->fields);

        $data = Setting::whereIn('name', $fields)->get();

        $newData = [];

        foreach ($fields as $field) {
            $newData[$field] = setting($field);
            if (in_array($field, ['logo', 'mini_logo', 'mini_logo', 'dark_logo', 'dark_mini_logo', 'favicon'])) {
                $newData[$field] = asset(setting($field));
            }
        }

        $newData['quick_booking_url'] = route('app.quick-booking');

        return response()->json($newData, 200);
    }

    public function store(Request $request)
    {
        if ($request->wantsJson()) {
            $rules = Setting::getSelectedValidationRules(array_keys($request->all()));
        } else {
            $rules = Setting::getValidationRules();
        }

        $data = $this->validate($request, $rules);

        $validSettings = array_keys($rules);

        foreach ($data as $key => $val) {
            if (in_array($key, $validSettings)) {
                $mimeTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/gif', 'image/vnd.microsoft.icon'];
                if (gettype($val) == 'object') {
                    if ($val->getType() == 'file' && in_array($val->getmimeType(), $mimeTypes)) {
                        $setting = Setting::add($key, '', Setting::getDataType($key));
                        $mediaItems = $setting->addMedia($val)->toMediaCollection($key);
                        $setting->update(['val' => $mediaItems->getUrl()]);
                    }
                } else {
                    $setting = Setting::add($key, $val, Setting::getDataType($key));
                }
            }
        }
        if ($request->wantsJson()) {
            $message = __('settings.save_setting');

            return response()->json(['message' => $message, 'status' => true], 200);
        } else {
            return redirect()->back()->with('status', __('messages.setting_save'));
        }
    }

    public function clear_cache()
    {
        Setting::flushCache();

        $message = __('messages.cache_cleard');

        return response()->json(['message' => $message, 'status' => true], 200);
    }

    public function verify_email(Request $request)
    {
        $mailObject = $request->all();
        try {
            \Config::set('mail', $mailObject);
            Mail::raw('This is a smtp mail varification test mail!', function ($message) use ($mailObject) {
                $message->to($mailObject['email'])->subject('Test Email');
            });

            return response()->json(['message' => 'Verification Successful', 'status' => true], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Verification Failed', 'status' => false], 500);
        }
    }
}
