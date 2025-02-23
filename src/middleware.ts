import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Le middleware n'est plus nécessaire car nous utilisons un état global
export function middleware(request: NextRequest) {
  return NextResponse.next();
}