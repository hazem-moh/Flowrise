// Calendly utility function
export const openCalendlyLink = () => {
    const redirectUrl = window.location.origin + '/call-booked';
    const calendlyUrl = `https://calendly.com/hazemmohamed345674/new-meeting?redirect_url=${encodeURIComponent(redirectUrl)}`;
    window.open(calendlyUrl, '_blank');
};

export default openCalendlyLink;
