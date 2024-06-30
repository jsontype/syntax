<tr>
    <td>
        <div class="d-flex align-items-center">
            <div class="iq-movie">
                <a href="javascript:void(0);"><img src="{{ asset('dashboard/images/movie-thumb/' . $recentlyImg) }}"
                        class="img-border-radius avatar-40 img-fluid" alt="recentlyImg-{{ $id }}" loading="lazy"></a>
            </div>
            <div class="media-body text-left ms-3">
                <p class="mb-0">{{ $recentlyText }}</p>
                <small>{{ $recentlyTime }}</small>
            </div>
        </div>
    </td>
    <td><i class="lar la-star me-2"></i>{{ $recentlyRating }}</td>
    <td>{{ $recentlyCate }}</td>
    <td>
        <i class="fa-regular fa-eye"></i>
    </td>
    <td>{{ $recentlyUser }}</td>
    <td>{{ $recentlyDate }}</td>
    <td><i class="fa-solid fa-heart text-primary"></i></td>
</tr>
