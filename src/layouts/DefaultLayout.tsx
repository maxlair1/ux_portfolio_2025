import React from 'react';

export function CoffeeLayout({ title, description, coverImage, children }) {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12 font-sans">
      {coverImage && (
        <img
          src={coverImage}
          alt={title}
          className="rounded-xl w-full mb-8 shadow-lg"
        />
      )}
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-mono uppercase leading-tight tracking-tight mb-2">
          {title}
        </h1>
        {description && (
          <p className="text-lg text-gray-600 font-serif normal-case">
            {description}
          </p>
        )}
      </header>

      <section className="prose prose-lg max-w-none dark:prose-invert">
        {children}
      </section>
    </article>
  );
}
