// Fight Pass Configuration
// Update these dates for each new fight pass
const fightPassConfig = {
  // Example dates - Update these with actual Tekken 8 fight pass dates
  startDate: new Date('2025-10-13T22:00:00Z'),
  endDate: new Date('2025-12-01T03:59:59Z'),
}

// Display timezone to force for date/time outputs. Change if you want a different zone.
const DISPLAY_TIMEZONE = 'UTC'

// Format date for display (date only)
function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return date.toLocaleDateString('en-US', options)
}

// Format date & time for display with forced timezone (e.g. "October 1, 2025, 00:00 UTC")
// Uses Intl formatting with the requested timeZone and appends an explicit UTC label if needed.
function formatDateTime(date, timeZone = DISPLAY_TIMEZONE) {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZoneName: 'short',
    timeZone: timeZone,
  }

  let formatted = date.toLocaleString('en-US', options)

  // Some environments show GMT instead of UTC; make UTC explicit when requested
  if (timeZone === 'UTC' && !/UTC|GMT/.test(formatted)) {
    formatted += ' (UTC)'
  }

  return formatted
}

// Update countdown timer
function updateCountdown() {
  const now = new Date().getTime()
  const endTime = fightPassConfig.endDate.getTime()
  const startTime = fightPassConfig.startDate.getTime()

  const distance = endTime - now
  const totalDuration = endTime - startTime
  const elapsed = now - startTime

  // Calculate time units
  const days = Math.floor(distance / (1000 * 60 * 60 * 24))
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((distance % (1000 * 60)) / 1000)

  // Update display
  document.getElementById('days').textContent = String(days).padStart(2, '0')
  document.getElementById('hours').textContent = String(hours).padStart(2, '0')
  document.getElementById('minutes').textContent = String(minutes).padStart(
    2,
    '0'
  )
  document.getElementById('seconds').textContent = String(seconds).padStart(
    2,
    '0'
  )

  // Calculate and update progress
  let progressPercent = 0
  if (elapsed >= 0 && elapsed <= totalDuration) {
    progressPercent = (elapsed / totalDuration) * 100
  } else if (elapsed > totalDuration) {
    progressPercent = 100
  }

  const progressBar = document.getElementById('progressBar')
  const progressPercentage = document.getElementById('progressPercentage')
  progressBar.style.width = progressPercent + '%'
  progressPercentage.textContent = progressPercent.toFixed(1) + '%'

  // Check if expired
  if (distance < 0) {
    document.getElementById('countdown').innerHTML =
      '<div class="time-unit expired"><span class="time-value">EXPIRED</span><span class="time-label">Fight Pass Ended</span></div>'
    progressBar.style.width = '100%'
    progressPercentage.textContent = '100%'
  }
}

// Initialize
function init() {
  // Display dates with forced timezone for clarity
  document.getElementById('startDate').textContent = formatDateTime(
    fightPassConfig.startDate,
    DISPLAY_TIMEZONE
  )
  document.getElementById('endDate').textContent = formatDateTime(
    fightPassConfig.endDate,
    DISPLAY_TIMEZONE
  )

  // Start countdown
  updateCountdown()
  setInterval(updateCountdown, 1000)
}

// Run on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init)
} else {
  init()
}
