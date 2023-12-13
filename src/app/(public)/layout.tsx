export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="bg-gray-100 flex h-16 items-center drop-shadow-lg mb-4">
        <div className="container"></div>
      </div>

      <div className="container">{children}</div>
    </>
  );
}
