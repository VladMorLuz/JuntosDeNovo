-- CreateTable
CREATE TABLE "Person" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "age" INTEGER,
    "description" TEXT NOT NULL,
    "lastSeenLocation" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'desaparecido',
    "contactInfo" TEXT NOT NULL,
    "photoUrl" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
