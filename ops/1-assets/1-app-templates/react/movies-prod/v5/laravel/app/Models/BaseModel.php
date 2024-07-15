<?php

namespace App\Models;

use App\Models\Traits\HasHashedMediaTrait;
use DB;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Auth;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class BaseModel extends Model implements HasMedia
{
    use SoftDeletes;
    use HasHashedMediaTrait;

    protected $guarded = [
        'id',
        'updated_at',
        '_token',
        '_method',
    ];

    protected $dates = [
        'deleted_at',
        'published_at',
    ];


    public function userRelation($field_name)
    {
        return $this->belongsTo(User::class, $field_name, 'id');
    }

    protected static function boot()
    {
        parent::boot();
    }

    /**
     * Create Converted copies of uploaded images.
     */
    public function registerMediaConversions(Media $media = null): void
    {
        $this->addMediaConversion('thumb')
            ->width(250)
            ->height(250)
            ->quality(70);

        $this->addMediaConversion('thumb300')
            ->width(300)
            ->height(300)
            ->quality(70);
    }

    /**
     * Get the list of all the Columns of the table.
     *
     * @return array Column names array
     */
    public function getTableColumns()
    {
        $table_info_columns = DB::select(DB::raw('SHOW COLUMNS FROM '.$this->getTable()));

        return $table_info_columns;
    }

    /**
     * Get Status Label.
     *
     * @return [type] [description]
     */
    public function getStatusLabelAttribute()
    {
        switch ($this->status) {
            case '0':
                return '<span class="badge bg-soft-danger">Inactive</span>';
                break;

            case '1':
                return '<span class="badge bg-soft-success">Active</span>';
                break;

            case '2':
                return '<span class="badge bg-soft-warning text-dark">Pending</span>';
                break;

            default:
                return '<span class="badge bg-soft-primary">Status:'.$this->status.'</span>';
                break;
        }
    }

    public function getStatus()
    {

        switch ($this->status) {
            case '1':
                return '<span class="badge bg-success">Active</span>';
                break;
            case '2':
                return '<span class="badge bg-warning text-dark">Inactive</span>';
                break;
            default:
                return '<span class="badge bg-primary">Status:'.$this->status.'</span>';
                break;
        }
    }

    /**
     * Get Status Label.
     *
     * @return [type] [description]
     */
    public function getStatusLabelTextAttribute()
    {
        switch ($this->status) {
            case '0':
                return 'Inactive';
                break;

            case '1':
                return 'Active';
                break;

            case '2':
                return 'Pending';
                break;

            default:
                return $this->status;
                break;
        }
    }

    /**
     *  Set 'Name' attribute value.
     */
    public function setNameAttribute($value)
    {
        $this->attributes['name'] = trim($value);
    }

    /**
     * Set the 'Slug'.
     * If no value submitted 'Name' will be used as slug
     * str_slug helper method was used to format the text.
     *
     * @param [type]
     */
    public function setSlugAttribute($value)
    {
        $this->attributes['slug'] = slug_format(trim($value));

        if (empty($value)) {
            $this->attributes['slug'] = slug_format(trim($this->attributes['name']));
        }
    }
}
