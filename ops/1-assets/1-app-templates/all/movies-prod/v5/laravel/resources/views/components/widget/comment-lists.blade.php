<tr>
    <td>{{ $commentNo }}</td>
    <td>
        {{ $commentTitle }}
    </td>
    <td>{{ $commentAuth }}</td>
    <td>
        <p class="mb-0">{{ $commentText }}</p>
    </td>
    <td>
        {{ $commentDate }}
    </td>
    <td>
        <div class="d-flex align-items-center list-user-action">
            <a class="btn btn-sm btn-icon btn-success rounded" data-bs-toggle="tooltip" data-bs-placement="top"
                title="Edit" href="#">
                <i class="fa-solid fa-pen"></i>
            </a>
            <a class="btn btn-sm btn-icon btn-danger delete-btn rounded" data-bs-toggle="tooltip" data-bs-placement="top"
                title="Delete" href="#">
                <i class="fa-solid fa-trash"></i>
            </a>
        </div>
    </td>
</tr>
