<?php

return [ /*
    |--------------------------------------------------------------------------
    | Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines contain the default error messages used by
    | the validator class. Some of these rules have multiple versions such
    | as the size rules. Feel free to tweak each of these messages here.
    |
    */
    'accepted' => 'Το πεδίο :attribute πρέπει να γίνει αποδεκτό.',
    'accepted_if' => 'Το πεδίο :attribute πρέπει να γίνει αποδεκτό όταν το :other είναι :value.',
    'active_url' => 'Το πεδίο :attribute πρέπει να είναι ένα έγκυρο URL.',
    'after' => 'Το πεδίο :attribute πρέπει να είναι μια ημερομηνία μετά από την :date.',
    'after_or_equal' => 'Το πεδίο :attribute πρέπει να είναι μια ημερομηνία μετά ή ίση με την :date.',
    'alpha' => 'Το πεδίο :attribute πρέπει να περιέχει μόνο γράμματα.',
    'alpha_dash' => 'Το πεδίο :attribute πρέπει να περιέχει μόνο γράμματα, αριθμούς, παύλες και κάτω παύλες.',
    'alpha_num' => 'Το πεδίο :attribute πρέπει να περιέχει μόνο γράμματα και αριθμούς.',
    'array' => 'Το πεδίο :attribute πρέπει να είναι ένας πίνακας.',
    'ascii' => 'Το πεδίο :attribute πρέπει να περιέχει μόνο μονομπαϊτικούς αλφαριθμητικούς χαρακτήρες και σύμβολα.',
    'before' => 'Το πεδίο :attribute πρέπει να είναι μια ημερομηνία πριν από την :date.',
    'before_or_equal' => 'Το πεδίο :attribute πρέπει να είναι μια ημερομηνία πριν ή ίση με την :date.',
    'between' => [
        'array' => 'Το πεδίο :attribute πρέπει να έχει ανάμεσα σε :min και :max αντικείμενα.',
        'file' => 'Το πεδίο :attribute πρέπει να είναι ανάμεσα σε :min και :max κιλομπαϊτ.',
        'numeric' => 'Το πεδίο :attribute πρέπει να είναι ανάμεσα σε :min και :max.',
        'string' => 'Το πεδίο :attribute πρέπει να έχει ανάμεσα σε :min και :max χαρακτήρες.',
    ],
    'boolean' => 'Το πεδίο :attribute πρέπει να είναι αληθές ή ψευδές.',
    'can' => 'Το πεδίο :attribute περιέχει μια μη εξουσιοδοτημένη τιμή.',
    'confirmed' => 'Η επιβεβαίωση του πεδίου :attribute δεν ταιριάζει.',
    'current_password' => 'Ο κωδικός πρόσβασης είναι εσφαλμένος.',
    'date' => 'Το πεδίο :attribute πρέπει να είναι μια έγκυρη ημερομηνία.',
    'date_equals' => 'Το πεδίο :attribute πρέπει να είναι ημερομηνία ίση με :date.',
    'date_format' => 'Το πεδίο :attribute πρέπει να ταιριάζει με τη μορφή :format.',
    'decimal' => 'Το πεδίο :attribute πρέπει να έχει :decimal δεκαδικά ψηφία.',
    'declined' => 'Το πεδίο :attribute πρέπει να απορριφθεί.',
    'declined_if' => 'Το πεδίο :attribute πρέπει να απορριφθεί όταν το :other είναι :value.',
    'different' => 'Το πεδίο :attribute και :other πρέπει να είναι διαφορετικά.',
    'digits' => 'Το πεδίο :attribute πρέπει να έχει :digits ψηφία.',
    'digits_between' => 'Το πεδίο :attribute πρέπει να έχει μεταξύ :min και :max ψηφία.',
    'dimensions' => 'Το πεδίο :attribute έχει μη έγκυρες διαστάσεις εικόνας.',
    'distinct' => 'Το πεδίο :attribute έχει διπλή τιμή.',
    'doesnt_end_with' => 'Το πεδίο :attribute δεν πρέπει να τελειώνει με μία από τις παρακάτω τιμές: :values.',
    'doesnt_start_with' => 'Το πεδίο :attribute δεν πρέπει να ξεκινά με μία από τις παρακάτω τιμές: :values.',
    'email' => 'Το πεδίο :attribute πρέπει να είναι μια έγκυρη διεύθυνση email.',
    'ends_with' => 'Το πεδίο :attribute πρέπει να τελειώνει με μία από τις παρακάτω τιμές: :values.',
    'enum' => 'Η επιλεγμένη :attribute δεν είναι έγκυρη.',
    'exists' => 'Η επιλεγμένη :attribute δεν είναι έγκυρη.',
    'extensions' => 'Το πεδίο :attribute πρέπει να έχει μία από τις παρακάτω επεκτάσεις: :values.',
    'file' => 'Το πεδίο :attribute πρέπει να είναι ένα αρχείο.',
    'filled' => 'Το πεδίο :attribute πρέπει να έχει μια τιμή.',
    'gt' =>
    [
        'array' => 'Το πεδίο :attribute πρέπει να έχει περισσότερα από :value στοιχεία.',
        'file' => 'Το πεδίο :attribute πρέπει να είναι μεγαλύτερο από :value κιλομπάιτ.',
        'numeric' => 'Το πεδίο :attribute πρέπει να είναι μεγαλύτερο από :value.',
        'string' => 'Το πεδίο :attribute πρέπει να είναι μεγαλύτερο από :value χαρακτήρες.',
    ],
    'gte' => [
        'array' => 'Το πεδίο :attribute πρέπει να έχει :value στοιχεία ή περισσότερα.',
        'file' => 'Το πεδίο :attribute πρέπει να είναι μεγαλύτερο ή ίσο με :value κιλομπάιτ.',
        'numeric' => 'Το πεδίο :attribute πρέπει να είναι μεγαλύτερο ή ίσο με :value.',
        'string' => 'Το πεδίο :attribute πρέπει να είναι μεγαλύτερο ή ίσο με :value χαρακτήρες.',
    ],
    'hex_color' => 'Το πεδίο :attribute πρέπει να είναι ένα έγκυρο εξαδικαδικό χρώμα.',
    'image' => 'Το πεδίο :attribute πρέπει να είναι μια εικόνα.',
    'in' => 'Η επιλεγμένη τιμή για το :attribute δεν είναι έγκυρη.',
    'in_array' => 'Το πεδίο :attribute πρέπει να υπάρχει στο :other.',
    'integer' => 'Το πεδίο :attribute πρέπει να είναι ακέραιος αριθμός.',
    'ip' => 'Το πεδίο :attribute πρέπει να είναι μια έγκυρη διεύθυνση IP.',
    'ipv4' => 'Το πεδίο :attribute πρέπει να είναι μια έγκυρη διεύθυνση IPv4.',
    'ipv6' => 'Το πεδίο :attribute πρέπει να είναι μια έγκυρη διεύθυνση IPv6.',
    'json' => 'Το πεδίο :attribute πρέπει να είναι μια έγκυρη συμβολοσειρά JSON.',
    'lowercase' => 'Το πεδίο :attribute πρέπει να είναι σε πεζά γράμματα.',
    'lt' => [
        'array' => 'Το πεδίο :attribute πρέπει να έχει λιγότερα από :value στοιχεία.',
        'file' => 'Το πεδίο :attribute πρέπει να είναι μικρότερο από :value kilobytes.',
        'numeric' => 'Το πεδίο :attribute πρέπει να είναι μικρότερο από :value.',
        'string' => 'Το πεδίο :attribute πρέπει να έχει λιγότερους από :value χαρακτήρες.',
    ],
    'lte' => [
        'array' => 'Το πεδίο :attribute δεν πρέπει να έχει περισσότερα από :value στοιχεία.',
        'file' => 'Το πεδίο :attribute πρέπει να είναι μικρότερο ή ίσο από :value kilobytes.',
        'numeric' => 'Το πεδίο :attribute πρέπει να είναι μικρότερο ή ίσο από :value.',
        'string' => 'Το πεδίο :attribute πρέπει να είναι μικρότερο ή ίσο από :value χαρακτήρες.',
    ],
    'mac_address' => 'Το πεδίο :attribute πρέπει να είναι μια έγκυρη διεύθυνση MAC.',
    'max' => [
        'array' => 'Το πεδίο :attribute δεν πρέπει να έχει περισσότερα από :max στοιχεία.',
        'file' => 'Το πεδίο :attribute δεν πρέπει να είναι μεγαλύτερο από :max κιλομπάιτ.',
        'numeric' => 'Το πεδίο :attribute δεν πρέπει να είναι μεγαλύτερο από :max.',
        'string' => 'Το πεδίο :attribute δεν πρέπει να είναι μεγαλύτερο από :max χαρακτήρες.',
    ],
    'max_digits' => 'Το πεδίο :attribute δεν πρέπει να έχει περισσότερα από :max ψηφία.',
    'mimes' => 'Το πεδίο :attribute πρέπει να είναι ένα αρχείο τύπου: :values.',
    'mimetypes' => 'Το πεδίο :attribute πρέπει να είναι ένα αρχείο τύπου: :values.',
    'min' => [
        'array' => 'Το πεδίο :attribute πρέπει να έχει τουλάχιστον :min αντικείμενα.',
        'file' => 'Το πεδίο :attribute πρέπει να είναι τουλάχιστον :min κιλομπάιτ.',
        'numeric' => 'Το πεδίο :attribute πρέπει να είναι τουλάχιστον :min.',
        'string' => 'Το πεδίο :attribute πρέπει να έχει τουλάχιστον :min χαρακτήρες.',
    ],
    'min_digits' => 'Το πεδίο :attribute πρέπει να έχει τουλάχιστον :min ψηφία.',
    'missing' => 'Το πεδίο :attribute πρέπει να είναι απουσιάζον.',
    'missing_if' => 'Το πεδίο :attribute πρέπει να είναι απουσιάζον όταν :other είναι :value.',
    'missing_unless' => 'Το πεδίο :attribute πρέπει να είναι απουσιάζον εκτός εάν :other είναι :value.',
    'missing_with' => 'Το πεδίο :attribute πρέπει να είναι απουσιάζον όταν :values είναι παρόν.',
    'missing_with_all' => 'Το πεδίο :attribute πρέπει να είναι απουσιάζον όταν τα :values είναι παρόντα.',
    'multiple_of' => 'Το πεδίο :attribute πρέπει να είναι πολλαπλάσιο του :value.',
    'not_in' => 'Η επιλεγμένη τιμή για το :attribute δεν είναι έγκυρη.',
    'not_regex' => 'Η μορφή του πεδίου :attribute δεν είναι έγκυρη.',
    'numeric' => 'Το πεδίο :attribute πρέπει να είναι αριθμός.',

    'password' => [
        'letters' => 'Το πεδίο :attribute πρέπει να περιέχει τουλάχιστον ένα γράμμα.',
        'mixed' => 'Το πεδίο :attribute πρέπει να περιέχει τουλάχιστον ένα κεφαλαίο και ένα πεζό γράμμα.',
        'numbers' => 'Το πεδίο :attribute πρέπει να περιέχει τουλάχιστον έναν αριθμό.',
        'symbols' => 'Το πεδίο :attribute πρέπει να περιέχει τουλάχιστον ένα σύμβολο.',
        'uncompromised' => 'Το δοσμένο :attribute έχει εμφανιστεί σε διαρροή δεδομένων. Παρακαλούμε επιλέξτε διαφορετικό :attribute.',
    ],
    'present' => 'Το πεδίο :attribute πρέπει να είναι παρόν.',
    'present_if' => 'Το πεδίο :attribute πρέπει να είναι παρόν όταν το :other είναι :value.',
    'present_unless' => 'Το πεδίο :attribute πρέπει να είναι παρόν εκτός αν το :other είναι :value.',
    'present_with' => 'Το πεδίο :attribute πρέπει να είναι παρόν όταν το :values είναι παρόν.',
    'present_with_all' => 'Το πεδίο :attribute πρέπει να είναι παρόν όταν όλα τα :values είναι παρόντα.',
    'prohibited' => 'Το πεδίο :attribute είναι απαγορευμένο.',
    'prohibited_if' => 'Το πεδίο :attribute είναι απαγορευμένο όταν το :other είναι :value.',
    'prohibited_unless' => 'Το πεδίο :attribute είναι απαγορευμένο εκτός αν το :other είναι στο :values.',
    'prohibits' => 'Το πεδίο :attribute απαγορεύει το :other από το να είναι παρόν.',
    'regex' => 'Η μορφή του πεδίου :attribute δεν είναι έγκυρη.',
    'required' => 'Το πεδίο :attribute είναι υποχρεωτικό.',
    'required_array_keys' => 'Το πεδίο :attribute πρέπει να περιέχει εγγραφές για: :values.',
    'required_if' => 'Το πεδίο :attribute απαιτείται όταν το :other είναι :value.',
    'required_if_accepted' => 'Το πεδίο :attribute απαιτείται όταν το :other είναι αποδεκτό.',
    'required_unless' => 'Το πεδίο :attribute απαιτείται εκτός αν το :other είναι στο :values.',
    'required_with' => 'Το πεδίο :attribute απαιτείται όταν το :values είναι παρόν.',
    'required_with_all' => 'Το πεδίο :attribute απαιτείται όταν το :values είναι παρόντα.',
    'required_without' => 'Το πεδίο :attribute απαιτείται όταν το :values δεν είναι παρόν.',
    'required_without_all' => 'Το πεδίο :attribute απαιτείται όταν κανένα από τα :values δεν είναι παρόντα.',
    'same' => 'Το πεδίο :attribute πρέπει να ταιριάζει με το :other.',
    'size' => [
        'array' => 'Το πεδίο :attribute πρέπει να περιέχει :size στοιχεία.',
        'file' => 'Το πεδίο :attribute πρέπει να είναι :size κιλομπαϊτ.',
        'numeric' => 'Το πεδίο :attribute πρέπει να είναι :size.',
        'string' => 'Το πεδίο :attribute πρέπει να είναι :size χαρακτήρες.',
    ],
    'starts_with' => 'Το πεδίο :attribute πρέπει να ξεκινά με μία από τις παρακάτω τιμές: :values.',
    'string' => 'Το πεδίο :attribute πρέπει να είναι συμβολοσειρά.',
    'timezone' => 'Το πεδίο :attribute πρέπει να είναι έγκυρη ζώνη ώρας.',
    'unique' => 'Το :attribute έχει ήδη ληφθεί.',
    'uploaded' => 'Απέτυχε η μεταφόρτωση του :attribute.',
    'uppercase' => 'Το πεδίο :attribute πρέπει να περιέχει κεφαλαίους χαρακτήρες μόνο.',
    'url' => 'Το πεδίο :attribute πρέπει να είναι έγκυρη διεύθυνση URL.',
    'ulid' => 'Το πεδίο :attribute πρέπει να είναι έγκυρο ULID.',
    'uuid' => 'Το πεδίο :attribute πρέπει να είναι έγκυρο UUID.',


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
            'rule-name' => 'Προσαρμοσμένο μήνυμα',
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
