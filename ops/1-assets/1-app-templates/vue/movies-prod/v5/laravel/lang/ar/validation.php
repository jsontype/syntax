<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines contain the default error messages used by
    | the validator class. Some of these rules have multiple versions such
    | as the size rules. Feel free to tweak each of these messages here.
    |
    */
    'accepted' => 'يجب قبول حقل :attribute.',
    'accepted_if' => 'يجب قبول حقل :attribute عندما يكون :other هو :value.',
    'active_url' => 'يجب أن يكون حقل :attribute عنوان URL صحيحًا.',
    'after' => 'يجب أن يكون حقل :attribute تاريخًا بعد :date.',
    'after_or_equal' => 'يجب أن يكون حقل :attribute تاريخًا بعد أو يساوي :date.',
    'alpha' => 'يجب أن يحتوي حقل :attribute على أحرف فقط.',
    'alpha_dash' => 'يجب أن يحتوي حقل :attribute على أحرف، أرقام، شرطات وشرطات سفلية فقط.',
    'alpha_num' => 'يجب أن يحتوي حقل :attribute على أحرف وأرقام فقط.',
    'array' => 'يجب أن يكون حقل :attribute مصفوفة.',
    'ascii' => 'يجب أن يحتوي حقل :attribute على أحرف أبجدية وأرقام ورموز فقط بحجم بايت واحد.',
    'before' => 'يجب أن يكون حقل :attribute تاريخًا قبل :date.',
    'before_or_equal' => 'يجب أن يكون حقل :attribute تاريخًا قبل أو يساوي :date.',
    'between' => [
        'array' => 'يجب أن يحتوي حقل :attribute على بين :min و :max عناصر.',
        'file' => 'يجب أن يكون حجم حقل :attribute بين :min و :max كيلوبايت.',
        'numeric' => 'يجب أن يكون قيمة حقل :attribute بين :min و :max.',
        'string' => 'يجب أن يكون طول النص في حقل :attribute بين :min و :max أحرف.',
    ],
    'boolean' => 'يجب أن يكون حقل :attribute صحيحًا أو خطأ.',
    'can' => 'يحتوي حقل :attribute على قيمة غير مصرح بها.',
    'confirmed' => 'لا يتطابق تأكيد حقل :attribute.',
    'current_password' => 'كلمة المرور غير صحيحة.',
    'date' => 'يجب أن يكون حقل :attribute تاريخًا صالحًا.',
    'date_equals' => 'يجب أن يكون حقل :attribute تاريخًا مساويًا لـ :date.',
    'date_format' => 'يجب أن يتطابق حقل :attribute مع الشكل :format.',
    'decimal' => 'يجب أن يحتوي حقل :attribute على :decimal أماكن عشرية.',
    'declined' => 'يجب أن يكون حقل :attribute مرفوضًا.',
    'declined_if' => 'يجب أن يكون حقل :attribute مرفوضًا عندما يكون :other هو :value.',
    'different' => 'يجب أن يكون الحقل :attribute و :other مختلفين.',
    'digits' => 'يجب أن يكون الحقل :attribute :digits أرقام.',
    'digits_between' => 'يجب أن يكون الحقل :attribute بين :min و :max أرقام.',
    'dimensions' => 'يحتوي حقل :attribute على أبعاد صورة غير صالحة.',
    'distinct' => 'يحتوي حقل :attribute على قيمة مكررة.',
    'doesnt_end_with' => 'يجب أن لا ينتهي الحقل :attribute بأحد القيم التالية: :values.',
    'doesnt_start_with' => 'يجب أن لا يبدأ الحقل :attribute بأحد القيم التالية: :values.',
    'email' => 'يجب أن يكون الحقل :attribute عنوان بريد إلكتروني صالح.',
    'ends_with' => 'يجب أن ينتهي الحقل :attribute بأحد القيم التالية: :values.',
    'enum' => 'ال:attribute المحدد غير صالح.',
    'exists' => 'ال:attribute المحدد غير صالح.',
    'extensions' => 'يجب أن يحتوي حقل :attribute على أحد الامتدادات التالية: :values.',
    'file' => 'يجب أن يكون حقل :attribute ملفًا.',
    'filled' => 'يجب أن يحتوي حقل :attribute على قيمة.',
    'gt' =>
    [
        'array' => 'يجب أن يحتوي حقل :attribute على أكثر من :value عناصر.',
        'file' => 'يجب أن يكون حقل :attribute أكبر من :value كيلوبايت.',
        'numeric' => 'يجب أن يكون حقل :attribute أكبر من :value.',
        'string' => 'يجب أن يكون حقل :attribute أكبر من :value حروف.',
    ],
    'gte' => [
        'array' => 'يجب أن يحتوي حقل :attribute على :value عنصر أو أكثر.',
        'file' => 'يجب أن يكون حقل :attribute أكبر من أو يساوي :value كيلوبايت.',
        'numeric' => 'يجب أن يكون حقل :attribute أكبر من أو يساوي :value.',
        'string' => 'يجب أن يكون حقل :attribute أكبر من أو يساوي :value حرفًا.',
    ],
    'hex_color' => 'يجب أن يكون حقل :attribute لوناً سداسياً عشرياً صالحاً.',
    'image' => 'يجب أن يكون حقل :attribute صورة.',
    'in' => 'القيمة المحددة :attribute غير صالحة.',
    'in_array' => 'يجب أن يكون حقل :attribute موجودًا في :other.',
    'integer' => 'يجب أن يكون حقل :attribute عددًا صحيحًا.',
    'ip' => 'يجب أن يكون حقل :attribute عنوان IP صالحًا.',
    'ipv4' => 'يجب أن يكون حقل :attribute عنوان IPv4 صالحًا.',
    'ipv6' => 'يجب أن يكون حقل :attribute عنوان IPv6 صالحًا.',
    'json' => 'يجب أن يكون حقل :attribute سلسلة JSON صالحة.',
    'lowercase' => 'يجب أن يكون حقل :attribute في الحالة الصغيرة.',
    'lt' => [
        'array' => 'يجب أن يحتوي الحقل :attribute على عناصر أقل من :value.',
        'file' => 'يجب أن يكون حقل :attribute أقل من :value كيلوبايت.',
        'numeric' => 'يجب أن يكون حقل :attribute أقل من :value.',
        'string' => 'يجب أن يكون حقل :attribute أقل من :value أحرف.',
    ],
    'lte' => [
        'array' => 'يجب ألا يحتوي الحقل :attribute على أكثر من :value عناصر.',
        'file' => 'يجب أن يكون حقل :attribute أقل من أو يساوي :value كيلوبايت.',
        'numeric' => 'يجب أن يكون حقل :attribute أقل من أو يساوي :value.',
        'string' => 'يجب أن يكون حقل :attribute أقل من أو يساوي :value أحرف.',
    ],
    'mac_address' => 'يجب أن يكون حقل :attribute عنوان MAC صالحًا.',
    'max' => [
        'array' => 'يجب ألا يحتوي حقل :attribute على أكثر من :max عنصر.',
        'file' => 'يجب ألا يكون حجم حقل :attribute أكبر من :max كيلوبايت.',
        'numeric' => 'يجب ألا يكون حقل :attribute أكبر من :max.',
        'string' => 'يجب ألا يكون طول حقل :attribute أكبر من :max حرف.',
    ],
    'max_digits' => 'يجب ألا يحتوي حقل :attribute على أكثر من :max أرقام.',
    'mimes' => 'يجب أن يكون حقل :attribute ملف من النوع: :values.',
    'mimetypes' => 'يجب أن يكون حقل :attribute ملف من النوع: :values.',
    'min' => [
        'array' => 'يجب أن يحتوي حقل :attribute على الأقل على :min عنصرًا.',
        'file' => 'يجب أن يكون حقل :attribute على الأقل :min كيلوبايت.',
        'numeric' => 'يجب أن يكون حقل :attribute على الأقل :min.',
        'string' => 'يجب أن يكون حقل :attribute على الأقل :min أحرف.',
    ],
    'min_digits' => 'يجب أن يحتوي حقل :attribute على الأقل على :min أرقام.',
    'missing' => 'يجب أن يكون حقل :attribute مفقودًا.',
    'missing_if' => 'يجب أن يكون حقل :attribute مفقودًا عندما يكون :other هو :value.',
    'missing_unless' => 'يجب أن يكون حقل :attribute مفقودًا ما لم يكن :other هو :value.',
    'missing_with' => 'يجب أن يكون حقل :attribute مفقودًا عندما يكون :values موجودًا.',
    'missing_with_all' => 'يجب أن يكون حقل :attribute مفقودًا عندما تكون :values موجودة.',
    'multiple_of' => 'يجب أن يكون حقل :attribute مضاعفًا لـ :value.',
    'not_in' => 'القيمة المختارة :attribute غير صالحة.',
    'not_regex' => 'تنسيق حقل :attribute غير صالح.',
    'numeric' => 'يجب أن يكون حقل :attribute رقمًا.',
    'password' => [
        'letters' => 'يجب أن يحتوي حقل :attribute على حرف واحد على الأقل.',
        'mixed' => 'يجب أن يحتوي حقل :attribute على حرف كبير وحرف صغير على الأقل.',
        'numbers' => 'يجب أن يحتوي حقل :attribute على رقم واحد على الأقل.',
        'symbols' => 'يجب أن يحتوي حقل :attribute على رمز واحد على الأقل.',
        'uncompromised' => 'ظهرت :attribute المعطاة في تسريب بيانات. يرجى اختيار :attribute مختلف.',
    ],
    'present' => 'يجب أن يكون حقل :attribute موجودًا.',
    'present_if' => 'يجب أن يكون حقل :attribute موجودًا عندما يكون :other هو :value.',
    'present_unless' => 'يجب أن يكون حقل :attribute موجودًا ما لم يكن :other هو :value.',
    'present_with' => 'يجب أن يكون حقل :attribute موجودًا عندما يكون :values موجودًا.',
    'present_with_all' => 'يجب أن يكون حقل :attribute موجودًا عندما يكونون :values موجودين.',
    'prohibited' => 'حقل :attribute ممنوع.',
    'prohibited_if' => 'حقل :attribute ممنوع عندما يكون :other هو :value.',
    'prohibited_unless' => 'حقل :attribute ممنوع ما لم يكن :other في :values.',
    'prohibits' => 'حقل :attribute يمنع :other من الوجود.',
    'regex' => 'تنسيق الحقل :attribute غير صالح.',
    'required' => 'الحقل :attribute مطلوب.',
    'required_array_keys' => 'يجب أن يحتوي الحقل :attribute على مدخلات ل: :values.',
    'required_if' => 'الحقل :attribute مطلوب عندما يكون :other هو :value.',
    'required_if_accepted' => 'الحقل :attribute مطلوب عندما يتم قبول :other.',
    'required_unless' => 'الحقل :attribute مطلوب ما لم يكن :other في :values.',
    'required_with' => 'الحقل :attribute مطلوب عندما يكون :values موجودًا.',
    'required_with_all' => 'الحقل :attribute مطلوب عندما تكون :values موجودة.',
    'required_without' => 'الحقل :attribute مطلوب عندما لا يكون :values موجودًا.',
    'required_without_all' => 'الحقل :attribute مطلوب عندما لا تكون أيًا من :values موجودة.',
    'same' => 'يجب أن يتطابق الحقل :attribute مع :other.',
    'size' => [
        'array' => 'يجب أن يحتوي حقل :attribute على :size عناصر.',
        'file' => 'يجب أن يكون حقل :attribute :size كيلوبايت.',
        'numeric' => 'يجب أن يكون حقل :attribute :size.',
        'string' => 'يجب أن يكون حقل :attribute :size أحرف.',
    ],
    'starts_with' => 'يجب أن يبدأ حقل :attribute بأحد القيم التالية: :values.',
    'string' => 'يجب أن يكون حقل :attribute سلسلة نصية.',
    'timezone' => 'يجب أن يكون حقل :attribute منطقة زمنية صالحة.',
    'unique' => 'تم استخدام :attribute بالفعل.',
    'uploaded' => 'فشل في تحميل :attribute.',
    'uppercase' => 'يجب أن يكون حقل :attribute حروف كبيرة فقط.',
    'url' => 'يجب أن يكون حقل :attribute رابطًا صالحًا.',
    'ulid' => 'يجب أن يكون حقل :attribute ULID صالحًا.',
    'uuid' => 'يجب أن يكون حقل :attribute UUID صالحًا.',

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | Here you may specify custom validation messages for attributes using the
    | convention "attribute.rule" to name the lines. This makes it quick to
    | specify a specific custom language line for a given attribute rule.
    |
    */

    'custom' => [
        'attribute-name' => [
            'rule-name' => 'رسالة مخصصة',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Attributes
    |--------------------------------------------------------------------------
    |
    | The following language lines are used to swap our attribute placeholder
    | with something more reader friendly such as "E-Mail Address" instead
    | of "email". This simply helps us make our message more expressive.
    |
    */

    'attributes' => [],



];
