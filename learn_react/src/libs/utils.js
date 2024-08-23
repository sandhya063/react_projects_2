export function formatDate(date) {
    return new Intl.DateTimeFormat(
        'en-US',
        { weekday: 'short' }
      ).format(date);
}

