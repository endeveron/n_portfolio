import ContactForm from '@/components/contacts/ContactForm';

const Contacts = async () => {
  return (
    <section className="mt-32 flex flex-1 pt-10 overflow-hidden">
      {/* Card */}
      <div className="relative w-full bg-card">
        {/* Card title */}
        <div className="absolute max-[460px]:text-6xl text-muted font-bold tracking-wide uppercase select-none -top-8 lg:left-8 -z-10 text-7xl lg:-top-12 left-10 xl:left-12 lg:text-8xl opacity-40 dark:opacity-75">
          Contacts
        </div>

        <ContactForm />
      </div>
    </section>
  );
};

export default Contacts;
