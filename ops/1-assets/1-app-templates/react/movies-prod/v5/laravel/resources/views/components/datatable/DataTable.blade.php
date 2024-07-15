<tr>
    <td >
        <input type="checkbox" class="form-check-input" />
    </td>
    <td>
        <div class="d-flex">
            <img src="{{ $thumbnail }}" alt="image" class="rounded-2 avatar avatar-55 img-fluid" loading="lazy" />
            <div class="d-flex flex-column ms-3 justify-content-center">
                <h6 class="text-capitalize">{{ $name }}</h6>
                <small>{{ $duration }}</small>
                <small class="text-capitalize">({{ $subtitles }})</small>
            </div>
        </div>
    </td>
    <td class="">
        <small>{{ $quality }} </small>
    </td>
    <td>
        @foreach ($genres as $genre)
            <span class="text-capitalize"> {{ $genre }}</span>
        @endforeach
    </td>
    <td >
        <small>{{ $date }} </small>
    </td>
    <td>World</td>
    <td>!!!</td>
    <td class="">
        <div class="d-flex justify-content-between">
            <div class="form-check form-switch ms-2">
                <input class="form-check-input" type="checkbox"  {{ isset($value) && $value ? 'checked' : '' }}/>
            </div>
        </div>
    </td>
    <td>
        <div class="d-flex align-items-center list-user-action">
            <button type="button" class="btn btn-sm btn-icon btn-success rounded" data-bs-toggle="tooltip" data-bs-placement="top"
            title="Edit">
                <i class="fa-solid fa-pen" data-bs-toggle="offcanvas" data-bs-target="#season-offcanvas-edit" aria-controls="season-offcanvas-edit"></i>
            </button>
            <a class="btn btn-sm btn-icon btn-danger delete-btn rounded" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete" href="#">
                <i class="fa-solid fa-trash"></i>
            </a>
        </div>
    </td>
</tr>
